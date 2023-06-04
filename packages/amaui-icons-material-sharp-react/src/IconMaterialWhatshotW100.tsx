import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWhatshotW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WhatshotW100'

      short_name='Whatshot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.275 0-2.562-.425Q8.15 19.85 6.95 19.05l.5-.5q1.05.725 2.2 1.087Q10.8 20 12 20q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12h-.7q0-1.8.687-3.388.688-1.587 1.863-2.762t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm-7.5-4.3L8 12.9l3 2.5 5.45-5.45v3.6h.6v-4.6h-4.6v.6h3.6L11 14.6l-3-2.5-3.8 3.8.125.25q.05.1.175.25ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialWhatshotW100.displayName = 'AmauiIconMaterialWhatshotW100';

export default IconMaterialWhatshotW100;
