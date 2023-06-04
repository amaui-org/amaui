import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBlockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlockW100'

      short_name='Block'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.35 0 5.675-2.325Q20 15.35 20 12q0-1.5-.55-2.888Q18.9 7.725 17.9 6.6L6.6 17.9q1.125 1.025 2.513 1.562Q10.5 20 12 20Zm-5.9-2.6L17.4 6.1q-1.1-1.05-2.5-1.575Q13.5 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 1.5.537 2.887.538 1.388 1.563 2.513Z"/>
    </Icon>
  );
});

IconMaterialBlockW100.displayName = 'AmauiIconMaterialBlockW100';

export default IconMaterialBlockW100;
