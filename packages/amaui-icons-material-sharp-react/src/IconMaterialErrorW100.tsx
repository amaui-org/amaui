import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorW100'

      short_name='Error'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.3q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.362-.138-.138-.363-.138-.2 0-.35.138-.15.137-.15.362 0 .2.15.35.15.15.35.15Zm-.35-3.1h.7v-6h-.7Zm.35 7.5q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"/>
    </Icon>
  );
});

IconMaterialErrorW100.displayName = 'AmauiIconMaterialErrorW100';

export default IconMaterialErrorW100;
