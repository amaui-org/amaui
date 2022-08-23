import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWhatshotSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotSharpW100Filled'
      short_name='Whatshot'

      {...props}
    >
      <path d="M12.45 8.95V9.55H16.05L11 14.6L8 12.1L4.225 15.875Q3.775 15 3.538 14.025Q3.3 13.05 3.3 12Q3.3 10.2 3.987 8.625Q4.675 7.05 5.863 5.862Q7.05 4.675 8.625 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.375 3.987Q16.95 4.675 18.138 5.862Q19.325 7.05 20.013 8.625Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.375Q19.325 16.95 18.138 18.137Q16.95 19.325 15.375 20.012Q13.8 20.7 12 20.7Q9.6 20.7 7.625 19.525Q5.65 18.35 4.5 16.4L8 12.9L11 15.4L16.45 9.95V13.55H17.05V8.95Z"/>
    </Icon>
  );
});

IconMaterialWhatshotSharpW100Filled.displayName = 'AmauiIconMaterialWhatshotSharpW100Filled';

export default IconMaterialWhatshotSharpW100Filled;
