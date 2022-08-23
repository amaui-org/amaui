import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveSharpFilled'
      short_name='SendAndArchive'

      {...props}
    >
      <path d="M17 20 20 17 19.3 16.3 17.5 18.1V14H16.5V18.1L14.7 16.3L14 17ZM3 20V14L11 12L3 10V4L17.3 10Q17.225 10 17.15 10Q17.075 10 17 10Q14.075 10 12.038 12.062Q10 14.125 10 17.05Q10 17.05 10 17.05Q10 17.05 10 17.05ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveSharpFilled.displayName = 'AmauiIconMaterialSendAndArchiveSharpFilled';

export default IconMaterialSendAndArchiveSharpFilled;
