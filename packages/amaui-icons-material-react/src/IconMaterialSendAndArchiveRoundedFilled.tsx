import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendAndArchiveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveRoundedFilled'
      short_name='SendAndArchive'

      {...props}
    >
      <path d="M16.5 18.1 15.05 16.65Q14.9 16.5 14.7 16.5Q14.5 16.5 14.35 16.65Q14.2 16.8 14.2 17Q14.2 17.2 14.35 17.35L16.475 19.475Q16.7 19.7 17 19.7Q17.3 19.7 17.525 19.475L19.65 17.35Q19.8 17.2 19.8 17Q19.8 16.8 19.65 16.65Q19.5 16.5 19.3 16.5Q19.1 16.5 18.95 16.65L17.5 18.1V14.5Q17.5 14.3 17.35 14.15Q17.2 14 17 14Q16.8 14 16.65 14.15Q16.5 14.3 16.5 14.5ZM3 18.5V14.775Q3 14.425 3.2 14.15Q3.4 13.875 3.75 13.8L11 12L3.75 10.2Q3.4 10.125 3.2 9.85Q3 9.575 3 9.225V5.5Q3 4.95 3.438 4.662Q3.875 4.375 4.375 4.575L17.3 10Q17.225 10 17.15 10Q17.075 10 17 10Q14.075 10 12.038 12.062Q10 14.125 10 17.05Q10 17.05 10 17.05Q10 17.05 10 17.05L4.4 19.425Q3.9 19.625 3.45 19.337Q3 19.05 3 18.5ZM17 22Q14.925 22 13.463 20.538Q12 19.075 12 17Q12 14.925 13.463 13.462Q14.925 12 17 12Q19.075 12 20.538 13.462Q22 14.925 22 17Q22 19.075 20.538 20.538Q19.075 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveRoundedFilled.displayName = 'AmauiIconMaterialSendAndArchiveRoundedFilled';

export default IconMaterialSendAndArchiveRoundedFilled;
