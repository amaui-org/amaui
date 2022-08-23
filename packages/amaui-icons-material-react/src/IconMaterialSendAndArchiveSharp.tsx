import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveSharp'
      short_name='SendAndArchive'

      {...props}
    >
      <path d="M3 20V4L17.3 10Q17.225 10 17.15 10Q17.075 10 17 10Q16.125 10 15.35 10.2Q14.575 10.4 13.85 10.75L5 7V10.5L11 12L5 13.5V17L10.4 14.7Q10.2 15.275 10.1 15.837Q10 16.4 10 17Q10 17 10 17.025Q10 17.05 10 17.05ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22ZM5 14.7Q5 13.5 5 12.45Q5 11.4 5 10.75V7V10.5V13.5V17ZM17 20 20 17 19.3 16.3 17.5 18.1V14H16.5V18.1L14.7 16.3L14 17Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveSharp.displayName = 'AmauiIconMaterialSendAndArchiveSharp';

export default IconMaterialSendAndArchiveSharp;
