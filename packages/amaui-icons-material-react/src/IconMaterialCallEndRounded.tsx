import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallEndRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallEndRounded'
      short_name='CallEnd'

      {...props}
    >
      <path d="M12 8Q14.95 8 17.812 9.188Q20.675 10.375 22.9 12.75Q23.2 13.05 23.2 13.45Q23.2 13.85 22.9 14.15L20.6 16.4Q20.325 16.675 19.963 16.7Q19.6 16.725 19.3 16.5L16 14V10.65Q15.05 10.35 14.05 10.175Q13.05 10 12 10Q10.95 10 9.95 10.175Q8.95 10.35 8 10.65V14L4.7 16.5Q4.4 16.725 4.038 16.7Q3.675 16.675 3.4 16.4L1.1 14.15Q0.8 13.85 0.8 13.45Q0.8 13.05 1.1 12.75Q3.3 10.375 6.175 9.188Q9.05 8 12 8ZM4.2 14.4 6 13V11.45Q5.275 11.825 4.6 12.312Q3.925 12.8 3.2 13.4ZM19.8 14.4 20.8 13.45Q20.075 12.8 19.4 12.325Q18.725 11.85 18 11.5V13ZM18 11.5Q18 11.5 18 11.5Q18 11.5 18 11.5ZM6 11.45Q6 11.45 6 11.45Q6 11.45 6 11.45Z"/>
    </Icon>
  );
});

IconMaterialCallEndRounded.displayName = 'AmauiIconMaterialCallEndRounded';

export default IconMaterialCallEndRounded;
