import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Split from '../_base/components/split'
import AddButton from '../_base/components/add-button'
import useConfig from './use-config'
import ConditionList from './components/condition-list'
import type { IfElseNodeType } from './types'
import Field from '@/app/components/workflow/nodes/_base/components/field'
import type { NodeProps } from '@/app/components/workflow/types'
const i18nPrefix = 'workflow.nodes.ifElse'

const Panel: FC<NodeProps<IfElseNodeType>> = ({
  id,
  data,
}) => {
  const { t } = useTranslation()
  const readOnly = false

  const {
    inputs,
    handleConditionsChange,
    handleAddCondition,
    handleLogicalOperatorToggle,
  } = useConfig(id, data)
  return (
    <div className='mt-2'>
      <div className='px-4 pb-4 space-y-4'>
        <Field
          title={t(`${i18nPrefix}.if`)}
        >
          <>
            <ConditionList
              className='mt-2'
              readonly={readOnly}
              list={inputs.conditions}
              onChange={handleConditionsChange}
              logicalOperator={inputs.logical_operator}
              onLogicalOperatorToggle={handleLogicalOperatorToggle}
            />
            <AddButton
              className='mt-3'
              text={t(`${i18nPrefix}.addCondition`)}
              onClick={handleAddCondition}
            />
          </>
        </Field>
        <Split />
        <Field
          title={t(`${i18nPrefix}.else`)}
        >
          <div className='leading-[18px] text-xs font-normal text-gray-400'>{t(`${i18nPrefix}.elseDescription`)}</div>
        </Field>
      </div>
    </div>
  )
}

export default React.memo(Panel)
