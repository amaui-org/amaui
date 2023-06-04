import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRunCircleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RunCircleW100'

      short_name='RunCircle'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.15 17.85v-3.475l-1.375-1.5-.55 2.8-3.45-.725.15-.675 2.775.575 1.05-5.3-1.9.7v1.6h-.7v-2.1l3.175-1.15q.325-.125.638 0 .312.125.462.45.575 1.225 1.3 1.638.725.412 1.125.462v.7q-.525-.05-1.312-.525-.788-.475-1.513-1.45l-.5 2.775 1.325 1.425v3.775Zm.35-10q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Zm0-.7q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialRunCircleW100.displayName = 'AmauiIconMaterialRunCircleW100';

export default IconMaterialRunCircleW100;
