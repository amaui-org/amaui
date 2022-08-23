import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactSupportSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactSupportSharpFilled'
      short_name='ContactSupport'

      {...props}
    >
      <path d="M12 22 11.75 19H11.5Q7.95 19 5.475 16.525Q3 14.05 3 10.5Q3 6.95 5.475 4.475Q7.95 2 11.5 2Q13.275 2 14.812 2.662Q16.35 3.325 17.513 4.487Q18.675 5.65 19.337 7.187Q20 8.725 20 10.5Q20 14.3 17.725 17.312Q15.45 20.325 12 22ZM11.475 15.975Q11.9 15.975 12.2 15.675Q12.5 15.375 12.5 14.95Q12.5 14.525 12.2 14.225Q11.9 13.925 11.475 13.925Q11.05 13.925 10.75 14.225Q10.45 14.525 10.45 14.95Q10.45 15.375 10.75 15.675Q11.05 15.975 11.475 15.975ZM10.75 12.8H12.25Q12.25 12.05 12.4 11.75Q12.55 11.45 13.35 10.65Q13.8 10.2 14.1 9.675Q14.4 9.15 14.4 8.55Q14.4 7.275 13.538 6.637Q12.675 6 11.5 6Q10.4 6 9.65 6.612Q8.9 7.225 8.6 8.1L10 8.65Q10.125 8.225 10.475 7.812Q10.825 7.4 11.5 7.4Q12.175 7.4 12.513 7.775Q12.85 8.15 12.85 8.6Q12.85 9.025 12.6 9.362Q12.35 9.7 12 10.05Q11.125 10.8 10.938 11.237Q10.75 11.675 10.75 12.8Z"/>
    </Icon>
  );
});

IconMaterialContactSupportSharpFilled.displayName = 'AmauiIconMaterialContactSupportSharpFilled';

export default IconMaterialContactSupportSharpFilled;
