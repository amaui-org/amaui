import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeW100Filled'

      short_name='DeveloperMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 7V3.8q0-.65.425-1.075Q7.15 2.3 7.8 2.3h8.4q.65 0 1.075.425.425.425.425 1.075V7H17V5.35H7V7Zm1.5 14.7q-.65 0-1.075-.425Q6.3 20.85 6.3 20.2V17H7v1.65h10V17h.7v3.2q0 .65-.425 1.075-.425.425-1.075.425Zm7.35-6.3q-.125-.125-.125-.25t.125-.25l2.9-2.9-2.9-2.9q-.1-.1-.112-.237-.013-.138.112-.263t.25-.125q.125 0 .25.125l2.875 2.875q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L15.65 15.4q-.1.1-.237.112-.138.013-.263-.112Zm-6.8 0-2.875-2.875q-.125-.125-.175-.25-.05-.125-.05-.275 0-.15.05-.275.05-.125.175-.25L8.35 8.6q.1-.1.238-.112.137-.013.262.112t.125.25q0 .125-.125.25L5.95 12l2.9 2.9q.1.1.113.237.012.138-.113.263t-.25.125q-.125 0-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeW100Filled.displayName = 'AmauiIconMaterialDeveloperModeW100Filled';

export default IconMaterialDeveloperModeW100Filled;
