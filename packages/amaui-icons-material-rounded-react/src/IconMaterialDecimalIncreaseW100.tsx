import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDecimalIncreaseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DecimalIncreaseW100'

      short_name='DecimalIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.975 17.7h-6.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h6.65L17 15q-.1-.1-.112-.25-.013-.15.112-.25.1-.1.238-.088.137.013.237.113l2.325 2.3q.225.225.225.525 0 .3-.225.525L17.475 20.2q-.1.1-.225.1t-.25-.1q-.125-.1-.112-.25.012-.15.112-.25Zm-13.5-4.925h.2q-.325 0-.537-.213-.213-.212-.213-.537v.2q0-.325.213-.537.212-.213.537-.213h-.2q-.5 0-.437.075.062.075.325.188.262.112.562.25.3.137.3.237v-.2q0-.5-.075-.438-.075.063-.187.325-.113.263-.25.563-.138.3-.238.3Zm4.775 0q-1.05 0-1.787-.738-.738-.737-.738-1.787v-4q0-1.05.738-1.788.737-.737 1.787-.737 1.05 0 1.788.737.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm7.55 0q-1.05 0-1.788-.738-.737-.737-.737-1.787v-4q0-1.05.737-1.788.738-.737 1.788-.737t1.788.737q.737.738.737 1.788v4q0 1.05-.737 1.787-.738.738-1.788.738Zm-7.55-.7q.75 0 1.288-.538.537-.537.537-1.287v-4q0-.75-.537-1.288-.538-.537-1.288-.537t-1.287.537q-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Zm7.55 0q.75 0 1.287-.538.538-.537.538-1.287v-4q0-.75-.538-1.288-.537-.537-1.287-.537-.75 0-1.287.537-.538.538-.538 1.288v4q0 .75.538 1.287.537.538 1.287.538Z"/>
    </Icon>
  );
});

IconMaterialDecimalIncreaseW100.displayName = 'AmauiIconMaterialDecimalIncreaseW100';

export default IconMaterialDecimalIncreaseW100;
