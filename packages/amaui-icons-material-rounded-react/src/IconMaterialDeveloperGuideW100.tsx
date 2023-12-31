import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeveloperGuideW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperGuideW100'

      short_name='DeveloperGuide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm-32-556v496q0 12 10 22t22 10h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10h-74v208q0 9-7.5 13.5T631-539l-36-22q-7-5-15-5t-15 5l-36 22q-8 5-15.5.5T506-552v-208H232q-12 0-22 10t-10 22Zm0 528v-560 560Z"/>
    </Icon>
  );
});

IconMaterialDeveloperGuideW100.displayName = 'AmauiIconMaterialDeveloperGuideW100';

export default IconMaterialDeveloperGuideW100;
