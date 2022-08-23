import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlatwareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlatwareSharpW100'
      short_name='Flatware'

      {...props}
    >
      <path d="M12.55 20.35V10.5Q11.575 10.05 11.062 9.125Q10.55 8.2 10.55 7.1Q10.55 5.775 11.138 4.712Q11.725 3.65 12.9 3.65Q14.075 3.65 14.663 4.712Q15.25 5.775 15.25 7.1Q15.25 8.2 14.738 9.125Q14.225 10.05 13.25 10.5V20.35ZM17.45 20.35V3.7Q18.55 3.975 19.2 4.9Q19.85 5.825 19.85 7V12.35H18.15V20.35ZM6.05 20.35V10.5Q5.25 10.45 4.7 9.925Q4.15 9.4 4.15 8.6V4Q4.15 3.85 4.25 3.75Q4.35 3.65 4.5 3.65Q4.65 3.65 4.75 3.75Q4.85 3.85 4.85 4V7.65H6.05V4Q6.05 3.85 6.15 3.75Q6.25 3.65 6.4 3.65Q6.55 3.65 6.65 3.75Q6.75 3.85 6.75 4V7.65H7.95V4Q7.95 3.85 8.05 3.75Q8.15 3.65 8.3 3.65Q8.45 3.65 8.55 3.75Q8.65 3.85 8.65 4V8.6Q8.65 9.4 8.1 9.925Q7.55 10.45 6.75 10.5V20.35Z"/>
    </Icon>
  );
});

IconMaterialFlatwareSharpW100.displayName = 'AmauiIconMaterialFlatwareSharpW100';

export default IconMaterialFlatwareSharpW100;
