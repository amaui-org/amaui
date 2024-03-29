import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocation'

      short_name='EditLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 13.5h.75q.05 0 .35-.15l3.75-3.775-1.425-1.425L8.65 11.9q-.05.05-.15.35V13q0 .2.15.35.15.15.35.15Zm5.575-4.65.7-.7q.125-.125.125-.263 0-.137-.125-.262l-.9-.9q-.125-.125-.262-.125-.138 0-.263.125l-.7.7ZM12 19.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363 4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163-1.8 2.762-5.45 5.987-.15.125-.35.2-.2.075-.4.075ZM12 10.2Z"/>
    </Icon>
  );
});

IconMaterialEditLocation.displayName = 'AmauiIconMaterialEditLocation';

export default IconMaterialEditLocation;
