import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100Filled'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-2.425 0-4.387-1.175Q5.65 18.35 4.5 16.4L8 12.9l3 2.5 5.45-5.45v3.6h.6v-4.6h-4.6v.6h3.6L11 14.6l-3-2.5-3.775 3.775Q3.8 15 3.55 14.025 3.3 13.05 3.3 12q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100Filled.displayName = 'AmauiIconMaterialWhatshotW100Filled';

export default IconMaterialWhatshotW100Filled;
