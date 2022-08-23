import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightness2Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2Sharp'
      short_name='Brightness2'

      {...props}
    >
      <path d="M9.5 4Q9.225 4 8.975 4Q8.725 4 8.5 4.05Q9.925 5.7 10.713 7.737Q11.5 9.775 11.5 12Q11.5 14.225 10.713 16.262Q9.925 18.3 8.5 19.95Q8.725 20 8.975 20Q9.225 20 9.5 20Q12.825 20 15.163 17.663Q17.5 15.325 17.5 12Q17.5 8.675 15.163 6.337Q12.825 4 9.5 4ZM9.5 2Q11.575 2 13.4 2.787Q15.225 3.575 16.575 4.925Q17.925 6.275 18.712 8.1Q19.5 9.925 19.5 12Q19.5 14.075 18.712 15.9Q17.925 17.725 16.575 19.075Q15.225 20.425 13.4 21.212Q11.575 22 9.5 22Q8.175 22 6.913 21.663Q5.65 21.325 4.5 20.65Q6.825 19.3 8.162 17Q9.5 14.7 9.5 12Q9.5 9.3 8.162 7Q6.825 4.7 4.5 3.35Q5.65 2.675 6.913 2.337Q8.175 2 9.5 2ZM11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Q11.5 12 11.5 12Z"/>
    </Icon>
  );
});

IconMaterialBrightness2Sharp.displayName = 'AmauiIconMaterialBrightness2Sharp';

export default IconMaterialBrightness2Sharp;
