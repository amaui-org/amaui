import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastConnectedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedSharp'
      short_name='CastConnected'

      {...props}
    >
      <path d="M18 8H7Q9.65 9.1 11.588 11.188Q13.525 13.275 14.35 16H18ZM2 4H22V20H15V18H20V6H4V7H2ZM2 20H5Q5 18.75 4.125 17.875Q3.25 17 2 17ZM7 20H9Q9 17.075 6.963 15.037Q4.925 13 2 13V15Q4.075 15 5.537 16.462Q7 17.925 7 20ZM2 9V11Q3.875 11 5.513 11.712Q7.15 12.425 8.363 13.637Q9.575 14.85 10.288 16.488Q11 18.125 11 20H13Q13 17.725 12.137 15.725Q11.275 13.725 9.775 12.225Q8.275 10.725 6.275 9.863Q4.275 9 2 9ZM11 13Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedSharp.displayName = 'AmauiIconMaterialCastConnectedSharp';

export default IconMaterialCastConnectedSharp;
