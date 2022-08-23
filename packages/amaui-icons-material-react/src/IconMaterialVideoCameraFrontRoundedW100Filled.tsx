import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCameraFrontRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontRoundedW100Filled'
      short_name='VideoCameraFront'

      {...props}
    >
      <path d="M7.525 15.1H13.725V15.05Q13.725 14.025 12.538 13.712Q11.35 13.4 10.625 13.4Q9.9 13.4 8.713 13.712Q7.525 14.025 7.525 15.05ZM10.625 11.6Q11.2 11.6 11.588 11.212Q11.975 10.825 11.975 10.25Q11.975 9.675 11.588 9.287Q11.2 8.9 10.625 8.9Q10.05 8.9 9.663 9.287Q9.275 9.675 9.275 10.25Q9.275 10.825 9.663 11.212Q10.05 11.6 10.625 11.6ZM5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L19.4 9.425Q19.6 9.225 19.838 9.337Q20.075 9.45 20.075 9.725V14.275Q20.075 14.55 19.838 14.662Q19.6 14.775 19.4 14.575L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontRoundedW100Filled.displayName = 'AmauiIconMaterialVideoCameraFrontRoundedW100Filled';

export default IconMaterialVideoCameraFrontRoundedW100Filled;
