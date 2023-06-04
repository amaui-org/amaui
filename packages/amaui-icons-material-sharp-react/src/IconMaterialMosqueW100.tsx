import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMosqueW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100'

      short_name='Mosque'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.65 20.35v-12q-.45-.2-.725-.55Q.65 7.45.65 7q0-.4.325-.913Q1.3 5.575 2 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v5.3h3.3v-4H7.9q-.6-.5-.925-1.138Q6.65 7.875 6.65 7.1q0-.825.4-1.538.4-.712 1.075-1.162L12 1.775 15.875 4.4q.675.45 1.075 1.162.4.713.4 1.538 0 .775-.325 1.412-.325.638-.925 1.138h2.25v4h3.3v-5.3q-.45-.2-.725-.55-.275-.35-.275-.8 0-.4.325-.913Q21.3 5.575 22 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v12h-8.7v-5h-3.3v5ZM9.9 9.65h4.2q1.05 0 1.8-.75t.75-1.8q0-.65-.3-1.225-.3-.575-.85-.925L12 2.625 8.5 4.95q-.55.35-.85.925-.3.575-.3 1.225 0 1.05.75 1.8t1.8.75Zm-7.55 10h7.3v-5h4.7v5h7.3v-5.3h-4v-4H6.35v4h-4Zm9.65-9.3Zm0-.7Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100.displayName = 'AmauiIconMaterialMosqueW100';

export default IconMaterialMosqueW100;
