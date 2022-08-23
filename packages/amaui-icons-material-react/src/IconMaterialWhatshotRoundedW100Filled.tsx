import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotRoundedW100Filled'
      short_name='Whatshot'

      {...props}
    >
      <path d="M12 20.7Q9.9 20.7 7.675 19.512Q5.45 18.325 4.5 16.4L8 12.9L10.475 14.95Q10.7 15.15 10.988 15.137Q11.275 15.125 11.475 14.925L16.45 9.95V13.25Q16.45 13.375 16.538 13.462Q16.625 13.55 16.75 13.55Q16.875 13.55 16.962 13.462Q17.05 13.375 17.05 13.25V9.7Q17.05 9.375 16.837 9.162Q16.625 8.95 16.3 8.95H12.75Q12.625 8.95 12.538 9.037Q12.45 9.125 12.45 9.25Q12.45 9.375 12.538 9.462Q12.625 9.55 12.75 9.55H16.05L11 14.6L8.525 12.55Q8.3 12.35 8.013 12.363Q7.725 12.375 7.525 12.575L4.225 15.875Q3.775 15 3.513 13.875Q3.25 12.75 3.3 11.65Q3.4 8.15 5.938 5.725Q8.475 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialWhatshotRoundedW100Filled.displayName = 'AmauiIconMaterialWhatshotRoundedW100Filled';

export default IconMaterialWhatshotRoundedW100Filled;
