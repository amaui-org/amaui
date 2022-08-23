import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTouchAppSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchAppSharpW100'
      short_name='TouchApp'

      {...props}
    >
      <path d="M11.5 2.3Q13.225 2.3 14.463 3.537Q15.7 4.775 15.7 6.5Q15.7 7.95 14.863 9.037Q14.025 10.125 12.7 10.525V9.775Q13.725 9.4 14.363 8.525Q15 7.65 15 6.5Q15 5.075 13.963 4.037Q12.925 3 11.5 3Q10.075 3 9.038 4.037Q8 5.075 8 6.5Q8 7.675 8.65 8.562Q9.3 9.45 10.3 9.8V10.525Q9 10.15 8.15 9.062Q7.3 7.975 7.3 6.5Q7.3 4.775 8.538 3.537Q9.775 2.3 11.5 2.3ZM10.25 20.7 5.75 16.25 6.5 15.5 10.3 16.25V6.5Q10.3 6 10.65 5.65Q11 5.3 11.5 5.3Q12 5.3 12.35 5.65Q12.7 6 12.7 6.5V11.8H13.9L18.7 14.15L17.55 20.7ZM10.55 20H16.95L17.9 14.575L13.75 12.5H12V6.5Q12 6.275 11.863 6.137Q11.725 6 11.5 6Q11.275 6 11.137 6.137Q11 6.275 11 6.5V17.1L6.75 16.25ZM10.55 20H11Q11 20 11.137 20Q11.275 20 11.5 20Q11.725 20 11.863 20Q12 20 12 20H13.75H16.95Z"/>
    </Icon>
  );
});

IconMaterialTouchAppSharpW100.displayName = 'AmauiIconMaterialTouchAppSharpW100';

export default IconMaterialTouchAppSharpW100;
