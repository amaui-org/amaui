import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubwaySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubwaySharpFilled'
      short_name='Subway'

      {...props}
    >
      <path d="M2 22V8.85Q2 6.725 3.1 5.162Q4.2 3.6 6.2 2.8Q7.55 2.275 9.075 2.137Q10.6 2 12 2Q13.4 2 14.925 2.137Q16.45 2.275 17.8 2.8Q19.8 3.6 20.9 5.162Q22 6.725 22 8.85V22ZM7.5 20H9.1L10.6 18.5H13.35L14.85 20H16.5V19.5L15.45 18.45Q16.55 18.3 17.275 17.462Q18 16.625 18 15.5V9Q18 7.05 16.25 6.525Q14.5 6 12 6Q9.725 6 7.863 6.525Q6 7.05 6 9V15.5Q6 16.625 6.725 17.462Q7.45 18.3 8.55 18.45L7.5 19.5ZM7.5 13V9H16.5V13ZM15.5 16.5Q15.075 16.5 14.788 16.212Q14.5 15.925 14.5 15.5Q14.5 15.075 14.788 14.787Q15.075 14.5 15.5 14.5Q15.925 14.5 16.212 14.787Q16.5 15.075 16.5 15.5Q16.5 15.925 16.212 16.212Q15.925 16.5 15.5 16.5ZM8.5 16.5Q8.075 16.5 7.788 16.212Q7.5 15.925 7.5 15.5Q7.5 15.075 7.788 14.787Q8.075 14.5 8.5 14.5Q8.925 14.5 9.213 14.787Q9.5 15.075 9.5 15.5Q9.5 15.925 9.213 16.212Q8.925 16.5 8.5 16.5Z"/>
    </Icon>
  );
});

IconMaterialSubwaySharpFilled.displayName = 'AmauiIconMaterialSubwaySharpFilled';

export default IconMaterialSubwaySharpFilled;
