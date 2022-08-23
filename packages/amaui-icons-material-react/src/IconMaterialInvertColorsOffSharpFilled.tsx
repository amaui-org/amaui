import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInvertColorsOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InvertColorsOffSharpFilled'
      short_name='InvertColorsOff'

      {...props}
    >
      <path d="M19.275 16.45 12 9.175V4.8L9.775 6.975L8.375 5.575L12 2L17.65 7.575Q18.85 8.775 19.425 10.162Q20 11.55 20 13.1Q20 14.05 19.8 14.912Q19.6 15.775 19.275 16.45ZM19.8 22.6 16.7 19.5Q15.65 20.275 14.413 20.637Q13.175 21 12 21Q8.675 21 6.338 18.712Q4 16.425 4 13.1Q4 11.825 4.4 10.65Q4.8 9.475 5.6 8.4L1.4 4.2L2.8 2.8L21.2 21.2ZM12 19V14.825L7 9.825Q6.475 10.625 6.238 11.438Q6 12.25 6 13.1Q6 15.6 7.75 17.3Q9.5 19 12 19Z"/>
    </Icon>
  );
});

IconMaterialInvertColorsOffSharpFilled.displayName = 'AmauiIconMaterialInvertColorsOffSharpFilled';

export default IconMaterialInvertColorsOffSharpFilled;
