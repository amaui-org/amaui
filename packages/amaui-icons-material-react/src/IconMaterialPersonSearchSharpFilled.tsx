import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonSearchSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonSearchSharpFilled'
      short_name='PersonSearch'

      {...props}
    >
      <path d="M11 12Q9.35 12 8.175 10.825Q7 9.65 7 8Q7 6.35 8.175 5.175Q9.35 4 11 4Q12.65 4 13.825 5.175Q15 6.35 15 8Q15 9.65 13.825 10.825Q12.65 12 11 12ZM22.1 23.5 18.9 20.3Q18.375 20.6 17.775 20.8Q17.175 21 16.5 21Q14.625 21 13.312 19.688Q12 18.375 12 16.5Q12 14.625 13.312 13.312Q14.625 12 16.5 12Q18.375 12 19.688 13.312Q21 14.625 21 16.5Q21 17.175 20.8 17.775Q20.6 18.375 20.3 18.9L23.5 22.1ZM16.5 19Q17.55 19 18.275 18.275Q19 17.55 19 16.5Q19 15.45 18.275 14.725Q17.55 14 16.5 14Q15.45 14 14.725 14.725Q14 15.45 14 16.5Q14 17.55 14.725 18.275Q15.45 19 16.5 19ZM3 20V17.225Q3 16.375 3.425 15.65Q3.85 14.925 4.6 14.55Q5.875 13.9 7.475 13.45Q9.075 13 11.025 13Q10.725 13.45 10.513 13.962Q10.3 14.475 10.175 15.025Q9.975 15.85 10 16.65Q10.025 17.45 10.175 18Q10.3 18.55 10.513 19.05Q10.725 19.55 11.025 20Z"/>
    </Icon>
  );
});

IconMaterialPersonSearchSharpFilled.displayName = 'AmauiIconMaterialPersonSearchSharpFilled';

export default IconMaterialPersonSearchSharpFilled;
