import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRealEstateAgentSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgentSharp'
      short_name='RealEstateAgent'

      {...props}
    >
      <path d="M19 14V7.5L14 4L9 7.5V9H7V6.5L14 1.5L21 6.5V14ZM14 22.5 7 20.55V22H1V11H8.95L17 14V16H22V20ZM3 20H5V13H3ZM13.95 20.4 19.9 18.55V18H12.825L9.7 16.95L10.3 15.05L13.225 16H15V15.35L8.6 13H7V18.5ZM14 4ZM14.5 8H15.5V7H14.5ZM12.5 8H13.5V7H12.5ZM14.5 10H15.5V9H14.5ZM12.5 10H13.5V9H12.5Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgentSharp.displayName = 'AmauiIconMaterialRealEstateAgentSharp';

export default IconMaterialRealEstateAgentSharp;
