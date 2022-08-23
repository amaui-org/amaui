import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrivateConnectivitySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrivateConnectivitySharp'
      short_name='PrivateConnectivity'

      {...props}
    >
      <path d="M12 19Q9.35 19 7.388 17.288Q5.425 15.575 5.075 13H2V11H5.075Q5.425 8.425 7.388 6.712Q9.35 5 12 5Q14.65 5 16.613 6.712Q18.575 8.425 18.925 11H22V13H18.925Q18.575 15.575 16.613 17.288Q14.65 19 12 19ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM9 15.5H15V10.5H14V9.6Q14 8.725 13.425 8.113Q12.85 7.5 12 7.5Q11.175 7.5 10.588 8.087Q10 8.675 10 9.5V10.5H9ZM12 13.75Q11.675 13.75 11.463 13.537Q11.25 13.325 11.25 13Q11.25 12.675 11.463 12.462Q11.675 12.25 12 12.25Q12.325 12.25 12.538 12.462Q12.75 12.675 12.75 13Q12.75 13.325 12.538 13.537Q12.325 13.75 12 13.75ZM11 10.5V9.5Q11 9.075 11.288 8.787Q11.575 8.5 12 8.5Q12.425 8.5 12.713 8.787Q13 9.075 13 9.5V10.5ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialPrivateConnectivitySharp.displayName = 'AmauiIconMaterialPrivateConnectivitySharp';

export default IconMaterialPrivateConnectivitySharp;
