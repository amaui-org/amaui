import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataSaverOnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataSaverOnRoundedFilled'
      short_name='DataSaverOn'

      {...props}
    >
      <path d="M12 16Q11.575 16 11.288 15.712Q11 15.425 11 15V13H9Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H11V9Q11 8.575 11.288 8.287Q11.575 8 12 8Q12.425 8 12.713 8.287Q13 8.575 13 9V11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13H13V15Q13 15.425 12.713 15.712Q12.425 16 12 16ZM21.15 16.05 18.55 14.55Q18.775 13.95 18.888 13.312Q19 12.675 19 12Q19 9.325 17.288 7.362Q15.575 5.4 13 5.05V2.05Q16.8 2.425 19.4 5.25Q22 8.075 22 12Q22 13.1 21.8 14.125Q21.6 15.15 21.15 16.05ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.062Q3.575 17.7 2.788 15.875Q2 14.05 2 12Q2 8.075 4.6 5.25Q7.2 2.425 11 2.05V5.05Q8.425 5.4 6.713 7.362Q5 9.325 5 12Q5 14.9 7.05 16.95Q9.1 19 12 19Q13.65 19 15.088 18.3Q16.525 17.6 17.5 16.4L20.1 17.9Q18.75 19.775 16.625 20.887Q14.5 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialDataSaverOnRoundedFilled.displayName = 'AmauiIconMaterialDataSaverOnRoundedFilled';

export default IconMaterialDataSaverOnRoundedFilled;
