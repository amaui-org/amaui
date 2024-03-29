import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTsunamiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsunamiW100Filled'

      short_name='Tsunami'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 20.3v-.7q.725-.1 1.363-.4.637-.3 1.312-.775.775.575 1.638.887.862.313 1.712.313.8 0 1.7-.288.9-.287 1.65-.862.8.6 1.65.875.85.275 1.7.275.875 0 1.65-.275.775-.275 1.7-.925.725.525 1.363.8.637.275 1.262.375v.7q-.6-.075-1.25-.312-.65-.238-1.375-.663-.9.55-1.75.788-.85.237-1.6.237-.725 0-1.6-.25-.875-.25-1.775-.8-.825.55-1.675.8-.85.25-1.65.25-.775 0-1.625-.25t-1.725-.775q-.675.4-1.35.637-.675.238-1.325.338Zm0-3.2v-2.6q0-2.3.888-4.175.887-1.875 2.425-3.213Q7.5 5.775 9.575 5.037 11.65 4.3 14 4.3q.525 0 1.062.037.538.038 1.013.113-.35.725-.537 1.475-.188.75-.188 1.4 0 1.65 1.163 2.812 1.162 1.163 2.812 1.163h2.025v.7h-2.025q-1.95 0-3.313-1.363-1.362-1.362-1.362-3.312 0-.575.138-1.237.137-.663.337-1.163-2.575.4-4.175 2.175-1.6 1.775-1.6 4.075 0 1.5.4 2.6t1.075 2.15q.275-.125.6-.338.325-.212.6-.387.8.575 1.7.9.9.325 1.65.325.75 0 1.65-.325.9-.325 1.7-.9.625.425 1.275.75.65.325 1.35.45v.7q-.6-.075-1.25-.35-.65-.275-1.375-.7-.9.55-1.737.825-.838.275-1.613.275-.8 0-1.712-.325-.913-.325-1.638-.775-.875.525-1.625.812-.75.288-1.725.288-1 0-1.762-.263-.763-.262-1.588-.762-.675.4-1.35.637Q3.3 17 2.65 17.1Z"/>
    </Icon>
  );
});

IconMaterialTsunamiW100Filled.displayName = 'AmauiIconMaterialTsunamiW100Filled';

export default IconMaterialTsunamiW100Filled;
