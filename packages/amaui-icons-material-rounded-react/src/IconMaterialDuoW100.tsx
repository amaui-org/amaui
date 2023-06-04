import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDuoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DuoW100'

      short_name='Duo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3h7.2q.65 0 1.075.425.425.425.425 1.075V12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12V4.8q0-.35-.225-.575Q19.55 4 19.2 4H12Q8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm-4-5.85h5.7v-2l3 2v-4.7l-3 2v-2H8ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialDuoW100.displayName = 'AmauiIconMaterialDuoW100';

export default IconMaterialDuoW100;
