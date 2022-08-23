import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAttachmentRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AttachmentRoundedW100Filled'
      short_name='Attachment'

      {...props}
    >
      <path d="M7 16.9Q4.975 16.9 3.562 15.462Q2.15 14.025 2.15 12Q2.15 9.975 3.588 8.537Q5.025 7.1 7.05 7.1H18.35Q19.825 7.1 20.863 8.137Q21.9 9.175 21.9 10.65Q21.9 12.125 20.863 13.162Q19.825 14.2 18.35 14.2H8.2Q7.275 14.2 6.638 13.562Q6 12.925 6 12Q6 11.075 6.638 10.438Q7.275 9.8 8.2 9.8H18Q18.15 9.8 18.25 9.9Q18.35 10 18.35 10.15Q18.35 10.3 18.25 10.4Q18.15 10.5 18 10.5H8.2Q7.575 10.5 7.138 10.925Q6.7 11.35 6.7 12Q6.7 12.625 7.138 13.062Q7.575 13.5 8.2 13.5H18.35Q19.55 13.5 20.375 12.675Q21.2 11.85 21.2 10.65Q21.2 9.45 20.375 8.625Q19.55 7.8 18.35 7.8H7.05Q5.3 7.8 4.075 9.025Q2.85 10.25 2.85 12Q2.85 13.725 4.062 14.962Q5.275 16.2 7 16.2H18Q18.15 16.2 18.25 16.3Q18.35 16.4 18.35 16.55Q18.35 16.7 18.25 16.8Q18.15 16.9 18 16.9Z"/>
    </Icon>
  );
});

IconMaterialAttachmentRoundedW100Filled.displayName = 'AmauiIconMaterialAttachmentRoundedW100Filled';

export default IconMaterialAttachmentRoundedW100Filled;
