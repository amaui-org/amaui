import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeHeatOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeHeatOffFilled'

      short_name='ModeHeatOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.925 16.1-1.975-1.975q-.275-2.75-1.875-4.875t-3.2-3.475q-.125.7-.363 1.287-.237.588-.537 1.088L9.5 6.675q.325-.775.438-1.713Q10.05 4.025 10 2q3.875 2.275 6.438 5.712Q19 11.15 19 15q0 .275-.012.55-.013.275-.063.55Zm.85 6.5-2.725-2.725q-.95.975-2.25 1.55Q13.5 22 12 22q-2.925 0-4.962-2.038Q5 17.925 5 15q0-1.875.613-3.05.612-1.175 1.412-2.125L1.4 4.2l1.4-1.4 18.4 18.375Zm-11.25-4q-.125-1.3.537-2.662.663-1.363 1.563-2.488L8.45 11.275q-.65.75-1.05 1.575T7 15q0 1.05.4 1.975T8.525 18.6ZM12 20q.55 0 1.038-.425.487-.425.487-1.3 0-.575-.337-1.4Q12.85 16.05 12 14.95q-.8 1.05-1.137 1.875-.338.825-.338 1.45 0 .85.463 1.287Q11.45 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialModeHeatOffFilled.displayName = 'AmauiIconMaterialModeHeatOffFilled';

export default IconMaterialModeHeatOffFilled;
