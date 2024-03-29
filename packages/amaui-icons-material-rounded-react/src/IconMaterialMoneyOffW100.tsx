import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoneyOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneyOffW100'

      short_name='MoneyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.2 8.2q-.325-.6-.875-.938-.55-.337-1.275-.337-.45 0-.975.175-.525.175-.875.6l-.5-.5q.375-.425.913-.663.537-.237 1.037-.287V5.1q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.15q.65.05 1.35.438.7.387 1.15 1.237.05.125 0 .275-.05.15-.175.2-.125.05-.262-.013-.138-.062-.213-.187Zm4.75 11.75-3.8-3.8q-.425.65-1.2 1.1-.775.45-1.6.45v1.15q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-1.2q-1.125-.2-1.787-.862-.663-.663-1.088-1.763-.05-.125.012-.263.063-.137.188-.187.125-.05.25.013.125.062.175.187.35.95 1.038 1.588.687.637 1.762.637.8 0 1.437-.375.638-.375 1.013-.975L4.05 5.05q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l14.9 14.9q.05.05.075.112.025.063.025.126 0 .062-.025.137-.025.075-.075.125-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialMoneyOffW100.displayName = 'AmauiIconMaterialMoneyOffW100';

export default IconMaterialMoneyOffW100;
