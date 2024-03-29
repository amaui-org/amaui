import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryFilled'

      short_name='Dry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 23q-1.25 0-2.125-.875T1 20v-6.025q0-.625.25-1.188.25-.562.7-.987L8.4 5.675q.3-.275.725-.263.425.013.7.313l.4.425q.25.275.275.612.025.338-.15.638L8.875 10h9.95q.5 0 .838.375.337.375.337.875 0 .525-.362.887-.363.363-.888.363H12.5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15h8.25q.525 0 .888.363.362.362.362.887t-.362.887q-.363.363-.888.363H12.5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15h7.25q.525 0 .888.363.362.362.362.887t-.362.887q-.363.363-.888.363H12.5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15h5.25q.525 0 .888.363.362.362.362.887t-.362.887q-.363.363-.888.363ZM16.025 9q-.4 0-.638-.288-.237-.287-.237-.762 0-.5-.225-.963-.225-.462-.575-.837-.675-.7-1.012-1.55-.338-.85-.313-1.775 0-.35.275-.588.275-.237.65-.237.425 0 .663.275.237.275.237.75 0 .5.175.95.175.45.55.825.675.7 1.05 1.562.375.863.35 1.788 0 .35-.287.6-.288.25-.663.25Zm4 0q-.4 0-.637-.288-.238-.287-.238-.762 0-.5-.225-.963-.225-.462-.575-.837-.675-.7-1.013-1.55-.337-.85-.312-1.775 0-.35.275-.588.275-.237.65-.237.425 0 .663.275.237.275.237.75 0 .5.175.95.175.45.55.825.675.7 1.05 1.562.375.863.35 1.788 0 .35-.287.6-.288.25-.663.25Z"/>
    </Icon>
  );
});

IconMaterialDryFilled.displayName = 'AmauiIconMaterialDryFilled';

export default IconMaterialDryFilled;
