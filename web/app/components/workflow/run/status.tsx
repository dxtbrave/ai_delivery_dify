'use client'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cn from '@/utils/classnames'
import Indicator from '@/app/components/header/indicator'
import StatusContainer from '@/app/components/workflow/run/status-container'

type ResultProps = {
  status: string
  time?: number
  tokens?: number
  error?: string
}

const StatusPanel: FC<ResultProps> = ({
  status,
  time,
  tokens,
  error,
}) => {
  const { t } = useTranslation()

  return (
    <StatusContainer status={status}>
      <div className='flex'>
        <div className='flex-[33%] max-w-[120px]'>
          <div className='mb-1 text-text-tertiary system-2xs-medium-uppercase'>{t('runLog.resultPanel.status')}</div>
          <div
            className={cn(
              'flex items-center gap-1 system-xs-semibold-uppercase',
              status === 'succeeded' && 'text-util-colors-green-green-600',
              status === 'failed' && 'text-util-colors-red-red-600',
              status === 'stopped' && 'text-util-colors-warning-warning-600',
              status === 'running' && 'text-util-colors-blue-light-blue-light-600',
            )}
          >
            {status === 'running' && (
              <>
                <Indicator color={'blue'} />
                <span>Running</span>
              </>
            )}
            {status === 'succeeded' && (
              <>
                <Indicator color={'green'} />
                <span>SUCCESS</span>
              </>
            )}
            {status === 'failed' && (
              <>
                <Indicator color={'red'} />
                <span>FAIL</span>
              </>
            )}
            {status === 'stopped' && (
              <>
                <Indicator color={'yellow'} />
                <span>STOP</span>
              </>
            )}
          </div>
        </div>
        <div className='flex-[33%] max-w-[152px]'>
          <div className='mb-1 text-text-tertiary system-2xs-medium-uppercase'>{t('runLog.resultPanel.time')}</div>
          <div className='flex items-center gap-1 system-sm-medium text-text-secondary'>
            {status === 'running' && (
              <div className='w-16 h-2 rounded-sm bg-text-quaternary' />
            )}
            {status !== 'running' && (
              <span>{`${time?.toFixed(3)}s`}</span>
            )}
          </div>
        </div>
        <div className='flex-[33%]'>
          <div className='mb-1 text-text-tertiary system-2xs-medium-uppercase'>{t('runLog.resultPanel.tokens')}</div>
          <div className='flex items-center gap-1 system-sm-medium text-text-secondary'>
            {status === 'running' && (
              <div className='w-20 h-2 rounded-sm bg-text-quaternary' />
            )}
            {status !== 'running' && (
              <span>{`${tokens || 0} Tokens`}</span>
            )}
          </div>
        </div>
      </div>
      {status === 'failed' && error && (
        <>
          <div className='my-2 h-[0.5px] bg-divider-subtle'/>
          <div className='system-xs-regular text-text-destructive'>{error}</div>
        </>
      )}
    </StatusContainer>
  )
}

export default StatusPanel
