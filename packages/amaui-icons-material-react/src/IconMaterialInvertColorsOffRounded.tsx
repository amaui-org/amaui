import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOffRounded'
      short_name='InvertColorsOff'

      {...props}
    >
      <path d="M19.275 16.45 12 9.175V4.8L9.775 6.975L8.375 5.575L11.3 2.7Q11.45 2.55 11.625 2.475Q11.8 2.4 12 2.4Q12.2 2.4 12.375 2.475Q12.55 2.55 12.7 2.7L17.65 7.575Q18.85 8.775 19.425 10.162Q20 11.55 20 13.1Q20 14.05 19.8 14.912Q19.6 15.775 19.275 16.45ZM19.1 21.9 16.7 19.5Q15.65 20.275 14.413 20.637Q13.175 21 12 21Q8.675 21 6.338 18.712Q4 16.425 4 13.1Q4 11.825 4.4 10.65Q4.8 9.475 5.6 8.4L2.1 4.9Q1.825 4.625 1.825 4.2Q1.825 3.775 2.1 3.5Q2.375 3.225 2.8 3.225Q3.225 3.225 3.5 3.5L20.5 20.5Q20.775 20.775 20.775 21.2Q20.775 21.625 20.5 21.9Q20.225 22.175 19.8 22.175Q19.375 22.175 19.1 21.9ZM12 19V14.825L7 9.825Q6.475 10.625 6.238 11.438Q6 12.25 6 13.1Q6 15.6 7.75 17.3Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOffRounded.displayName = 'AmauiIconMaterialInvertColorsOffRounded';

export default IconMaterialInvertColorsOffRounded;
