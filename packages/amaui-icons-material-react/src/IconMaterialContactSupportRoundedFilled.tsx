import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactSupportRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportRoundedFilled'
      short_name='ContactSupport'

      {...props}
    >
      <path d="M12 22 11.75 19H11.5Q7.95 19 5.475 16.525Q3 14.05 3 10.5Q3 6.95 5.475 4.475Q7.95 2 11.5 2Q13.275 2 14.812 2.662Q16.35 3.325 17.513 4.487Q18.675 5.65 19.337 7.187Q20 8.725 20 10.5Q20 14.3 17.725 17.312Q15.45 20.325 12 22ZM11.475 15.975Q11.9 15.975 12.2 15.675Q12.5 15.375 12.5 14.95Q12.5 14.525 12.2 14.225Q11.9 13.925 11.475 13.925Q11.05 13.925 10.75 14.225Q10.45 14.525 10.45 14.95Q10.45 15.375 10.75 15.675Q11.05 15.975 11.475 15.975ZM11.5 12.8Q11.775 12.8 12 12.6Q12.225 12.4 12.3 12.05Q12.35 11.725 12.575 11.462Q12.8 11.2 13.35 10.65Q13.8 10.2 14.1 9.675Q14.4 9.15 14.4 8.55Q14.4 7.275 13.538 6.637Q12.675 6 11.5 6Q10.625 6 9.988 6.4Q9.35 6.8 8.95 7.4Q8.775 7.675 8.887 7.975Q9 8.275 9.35 8.4Q9.6 8.5 9.85 8.4Q10.1 8.3 10.3 8.025Q10.5 7.75 10.788 7.575Q11.075 7.4 11.5 7.4Q12.175 7.4 12.513 7.775Q12.85 8.15 12.85 8.6Q12.85 9.025 12.6 9.362Q12.35 9.7 12 10.05Q11.3 10.65 11.062 11.025Q10.825 11.4 10.775 12.05Q10.75 12.35 10.963 12.575Q11.175 12.8 11.5 12.8Z"/>
    </Icon>
  );
});

IconMaterialContactSupportRoundedFilled.displayName = 'AmauiIconMaterialContactSupportRoundedFilled';

export default IconMaterialContactSupportRoundedFilled;
