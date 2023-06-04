import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForestW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForestW100Filled'

      short_name='Forest'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20.7q-.275 0-.487-.213-.213-.212-.213-.487v-2.6h1.4V20q0 .275-.2.487-.2.213-.5.213Zm-6 0q-.275 0-.488-.213Q8.3 20.275 8.3 20v-3.3H3.85q-.45 0-.662-.4-.213-.4.037-.775L6.45 10.7h-.5q-.45 0-.675-.4-.225-.4.05-.775l3.05-4.375Q8.6 4.825 9 4.825t.625.325l3.1 4.375q.275.375.05.775-.225.4-.675.4h-.55l3.2 4.825q.25.375.038.775-.213.4-.663.4H9.7V20q0 .275-.2.487-.2.213-.5.213Zm6.375-4q.225-.2.275-.587.05-.388-.15-.713l-2.8-4.225q.55-.075.788-.737.237-.663-.188-1.238l-.875-1.25 1.95-2.8q.225-.325.625-.325t.625.325l3.05 4.375q.275.375.05.775-.225.4-.675.4h-.5l3.225 4.825q.25.375.037.775-.212.4-.662.4Z"/>
    </Icon>
  );
});

IconMaterialForestW100Filled.displayName = 'AmauiIconMaterialForestW100Filled';

export default IconMaterialForestW100Filled;
