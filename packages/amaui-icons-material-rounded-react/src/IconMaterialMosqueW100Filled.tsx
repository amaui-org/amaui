import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMosqueW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MosqueW100Filled'

      short_name='Mosque'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 8.95q-.775 0-1.312-.538Q6.65 7.875 6.65 7.1q0-.825.4-1.538.4-.712 1.075-1.162L12 1.775 15.875 4.4q.675.45 1.075 1.162.4.713.4 1.538 0 .775-.538 1.312-.537.538-1.312.538Zm-6.85 11.4v-12q-.45-.2-.725-.55Q.65 7.45.65 7q0-.4.325-.913Q1.3 5.575 2 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v5.3h3.3V11q0-.575.388-.963.387-.387.962-.387h10q.575 0 .962.387.388.388.388.963v2.65h3.3v-5.3q-.45-.2-.725-.55-.275-.35-.275-.8 0-.4.325-.913Q21.3 5.575 22 4.925q.7.65 1.025 1.162.325.513.325.913 0 .45-.275.8-.275.35-.725.55v12h-8.7V17q0-.675-.487-1.163-.488-.487-1.163-.487t-1.162.487q-.488.488-.488 1.163v3.35Z"/>
    </Icon>
  );
});

IconMaterialMosqueW100Filled.displayName = 'AmauiIconMaterialMosqueW100Filled';

export default IconMaterialMosqueW100Filled;
