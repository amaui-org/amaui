import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDocsAppsScriptRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DocsAppsScriptRounded'
      short_name='DocsAppsScript'

      {...props}
    >
      <path d="M13 21Q12.575 21 12.288 20.712Q12 20.425 12 20Q12 19.575 12.288 19.288Q12.575 19 13 19H15.825L13.525 17.375Q13.175 17.125 13.113 16.738Q13.05 16.35 13.275 16Q13.5 15.65 13.9 15.588Q14.3 15.525 14.65 15.75L16.975 17.35L16 14.7Q15.85 14.325 16.025 13.95Q16.2 13.575 16.6 13.425Q17 13.275 17.375 13.45Q17.75 13.625 17.9 14.025L18.85 16.675L19.6 13.95Q19.725 13.55 20.062 13.337Q20.4 13.125 20.8 13.25Q21.2 13.375 21.425 13.712Q21.65 14.05 21.525 14.45L19.975 20.25Q19.875 20.6 19.613 20.8Q19.35 21 19 21ZM18 6H3V4H18ZM3 10V8H18V10ZM3 14V12H12.65Q12.075 12.4 11.613 12.9Q11.15 13.4 10.8 14ZM3 16H10.075Q10.025 16.25 10.012 16.488Q10 16.725 10 16.975Q10 17.25 10.025 17.5Q10.05 17.75 10.1 18H3Z"/>
    </Icon>
  );
});

IconMaterialDocsAppsScriptRounded.displayName = 'AmauiIconMaterialDocsAppsScriptRounded';

export default IconMaterialDocsAppsScriptRounded;
