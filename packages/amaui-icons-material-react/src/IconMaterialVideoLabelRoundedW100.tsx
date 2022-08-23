import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLabelRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLabelRoundedW100'
      short_name='VideoLabel'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4 15H20V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8Z"/>
    </Icon>
  );
});

IconMaterialVideoLabelRoundedW100.displayName = 'AmauiIconMaterialVideoLabelRoundedW100';

export default IconMaterialVideoLabelRoundedW100;
