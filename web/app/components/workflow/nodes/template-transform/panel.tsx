import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import useConfig from './use-config'
import type { TemplateTransformNodeType } from './types'
import VarList from '@/app/components/workflow/nodes/_base/components/variable/var-list'
import AddButton from '@/app/components/base/button/add-button'
import Field from '@/app/components/workflow/nodes/_base/components/field'
import Split from '@/app/components/workflow/nodes/_base/components/split'
import CodeEditor from '@/app/components/workflow/nodes/_base/components/editor/code-editor'
import OutputVars, { VarItem } from '@/app/components/workflow/nodes/_base/components/output-vars'
import { HelpCircle } from '@/app/components/base/icons/src/vender/line/general'
import type { NodeProps } from '@/app/components/workflow/types'

const i18nPrefix = 'workflow.nodes.templateTransform'

const Panel: FC<NodeProps<TemplateTransformNodeType>> = ({
  id,
  data,
}) => {
  const { t } = useTranslation()
  const readOnly = false

  const {
    inputs,
    handleVarListChange,
    handleAddVariable,
    handleCodeChange,
  } = useConfig(id, data)

  return (
    <div className='mt-2'>
      <div className='px-4 pb-4 space-y-4'>

        <Field
          title={t(`${i18nPrefix}.inputVars`)}
          operations={
            <AddButton onClick={handleAddVariable} />
          }
        >
          <VarList
            readonly={readOnly}
            list={inputs.variables}
            onChange={handleVarListChange}
          />
        </Field>
        <Split />
        <CodeEditor
          title={
            <div className='uppercase'>{t(`${i18nPrefix}.code`)}</div>
          }
          headerRight={
            <div className='flex items-center'>
              <a
                className='flex items-center space-x-0.5 h-[18px] text-xs font-normal text-gray-500'
                href="https://jinja.palletsprojects.com/en/3.1.x/templates/"
                target='_blank'>
                <span>{t(`${i18nPrefix}.codeSupportTip`)}</span>
                <HelpCircle className='w-3 h-3' />
              </a>
              <div className='mx-1.5 w-px h-3 bg-gray-200'></div>
            </div>
          }
          value={inputs.template}
          onChange={handleCodeChange}
        />
      </div>
      <Split />
      <div className='px-4 pt-4 pb-2'>
        <OutputVars>
          <>
            <VarItem
              name='output'
              type='string'
              description={t(`${i18nPrefix}.outputVars.output`)}
            />
          </>
        </OutputVars>
      </div>
    </div>
  )
}

export default React.memo(Panel)
