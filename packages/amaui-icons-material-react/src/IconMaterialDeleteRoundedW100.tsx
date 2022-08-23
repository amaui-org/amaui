import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteRoundedW100'
      short_name='Delete'

      {...props}
    >
      <path d="M7.8 19.7Q7.15 19.7 6.725 19.275Q6.3 18.85 6.3 18.2V6H5.65Q5.5 6 5.4 5.9Q5.3 5.8 5.3 5.65Q5.3 5.5 5.4 5.4Q5.5 5.3 5.65 5.3H9Q9 5 9.225 4.8Q9.45 4.6 9.75 4.6H14.25Q14.55 4.6 14.775 4.8Q15 5 15 5.3H18.35Q18.5 5.3 18.6 5.4Q18.7 5.5 18.7 5.65Q18.7 5.8 18.6 5.9Q18.5 6 18.35 6H17.7V18.2Q17.7 18.85 17.275 19.275Q16.85 19.7 16.2 19.7ZM7 6V18.2Q7 18.55 7.225 18.775Q7.45 19 7.8 19H16.2Q16.55 19 16.775 18.775Q17 18.55 17 18.2V6ZM10.05 16.65Q10.05 16.8 10.15 16.9Q10.25 17 10.4 17Q10.55 17 10.65 16.9Q10.75 16.8 10.75 16.65V8.35Q10.75 8.2 10.65 8.1Q10.55 8 10.4 8Q10.25 8 10.15 8.1Q10.05 8.2 10.05 8.35ZM13.25 16.65Q13.25 16.8 13.35 16.9Q13.45 17 13.6 17Q13.75 17 13.85 16.9Q13.95 16.8 13.95 16.65V8.35Q13.95 8.2 13.85 8.1Q13.75 8 13.6 8Q13.45 8 13.35 8.1Q13.25 8.2 13.25 8.35ZM7 6V18.2Q7 18.55 7.225 18.775Q7.45 19 7.8 19H7Q7 19 7 18.775Q7 18.55 7 18.2V6Z"/>
    </Icon>
  );
});

IconMaterialDeleteRoundedW100.displayName = 'AmauiIconMaterialDeleteRoundedW100';

export default IconMaterialDeleteRoundedW100;
