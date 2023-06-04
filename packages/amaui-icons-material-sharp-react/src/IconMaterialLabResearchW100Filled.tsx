import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabResearchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabResearchW100Filled'

      short_name='LabResearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19.975q-1.65 0-2.8-1.15t-1.15-2.8V7.2h-1V3.05h9.9V7.2h-1l-.025 5.25q-.2.225-.363.45-.162.225-.312.475h-2.6v-.7h2.6v-2.3h-2.6v-.7h2.6V7.2h-6.5v8.825q0 1.35.95 2.3.95.95 2.3.95.8 0 1.463-.35.662-.35 1.112-.925.05.2.125.387.075.188.15.388-.55.575-1.275.888-.725.312-1.575.312Zm.65-3.6v-.7h1.8q-.025.175-.037.337-.013.163-.013.363ZM16.5 19.4q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85Zm5.1 2.675-2.8-2.8q-.5.4-1.088.613-.587.212-1.212.212-1.5 0-2.55-1.05Q12.9 18 12.9 16.5q0-1.5 1.05-2.55Q15 12.9 16.5 12.9q1.5 0 2.55 1.05Q20.1 15 20.1 16.5q0 .625-.212 1.212-.213.588-.613 1.088l2.8 2.8Z"/>
    </Icon>
  );
});

IconMaterialLabResearchW100Filled.displayName = 'AmauiIconMaterialLabResearchW100Filled';

export default IconMaterialLabResearchW100Filled;
