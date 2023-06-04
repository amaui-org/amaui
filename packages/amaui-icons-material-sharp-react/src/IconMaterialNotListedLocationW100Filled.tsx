import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotListedLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationW100Filled'

      short_name='NotListedLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.175q.225 0 .388-.163.162-.162.162-.387t-.162-.388q-.163-.162-.388-.162t-.387.162q-.163.163-.163.388t.163.387q.162.163.387.163Zm-.35-2.65h.7q.025-.35.075-.55.05-.2.175-.4.15-.225.363-.475.212-.25.587-.625.475-.475.688-.913.212-.437.212-.987 0-.95-.687-1.55-.688-.6-1.663-.6-.8 0-1.462.413-.663.412-.988 1.137l.65.275q.275-.55.725-.838.45-.287 1.075-.287.65 0 1.15.4.5.4.5 1.05 0 .475-.2.837-.2.363-.75.863-.325.3-.55.575-.225.275-.35.55-.125.275-.187.55-.063.275-.063.575ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationW100Filled.displayName = 'AmauiIconMaterialNotListedLocationW100Filled';

export default IconMaterialNotListedLocationW100Filled;
