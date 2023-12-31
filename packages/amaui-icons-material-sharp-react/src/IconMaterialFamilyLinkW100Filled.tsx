import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyLinkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyLinkW100Filled'

      short_name='FamilyLink'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M403-128q-40.8 0-72.4-24.261-31.6-24.262-42.8-62.444Q283-233 268-244.5T234.182-256q-13.091 0-24.546 5.2Q198.182-245.6 190-236l-48-41q17-20 41-31.5t51.2-11.5q40.8 0 72.8 24.261 32 24.262 43.2 62.444Q355-215 369.5-203.5t33.221 11.5q16.279 0 28.779-7.5T452-221L231-526q-14-20-11.993-43.53 2.007-23.53 18.865-40.28L449-814q9-8 20-13t22-5q11 0 22.5 5t20.5 13l210 204q17 17 19 40.5T751-526L507-188.739q-16 27.972-43.2 44.355Q436.6-128 403-128Z"/>
    </Icon>
  );
});

IconMaterialFamilyLinkW100Filled.displayName = 'AmauiIconMaterialFamilyLinkW100Filled';

export default IconMaterialFamilyLinkW100Filled;
