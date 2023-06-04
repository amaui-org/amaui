import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoW100Filled'

      short_name='Info'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16.35h.7V11h-.7Zm.35-6.6q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.363-.138-.137-.363-.137-.2 0-.35.137-.15.138-.15.363 0 .2.15.35.15.15.35.15Zm0 10.95q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialInfoW100Filled.displayName = 'AmauiIconMaterialInfoW100Filled';

export default IconMaterialInfoW100Filled;
