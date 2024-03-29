import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPulmonology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Pulmonology'

      short_name='Pulmonology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 21H2v-7.175L5.3 5H10v4H8V7H6.7L4 14.175V19h5v-3h2Zm11 0h-9v-5h2v3h5v-4.825L17.3 7H16v2h-2V5h4.7l3.3 8.825ZM8.7 13.3Zm6.6 0ZM12 11.4 9.4 14 8 12.6l3-3V2h2v7.6l3 3-1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialPulmonology.displayName = 'AmauiIconMaterialPulmonology';

export default IconMaterialPulmonology;
