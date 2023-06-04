import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRvHookupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RvHookupW100'

      short_name='RvHookup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.3 19.95-.5-.5 1.75-1.75H11.1q-.1.875-.762 1.437-.663.563-1.538.563t-1.525-.563q-.65-.562-.775-1.437H3.1v-7.05h5.3v-3H3.1v-.7h12.4V17h5.05l-1.75-1.75.5-.5 2.6 2.6Zm-10.1-9.3h5.6v-3H9.2ZM8.8 19q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.162Q9.475 15.7 8.8 15.7t-1.162.488q-.488.487-.488 1.162 0 .675.488 1.162Q8.125 19 8.8 19Zm-2.3-2q.125-.875.775-1.438Q7.925 15 8.8 15q.875 0 1.538.562.662.563.762 1.438h3.7v-5.65h-11V17Zm0-5.65H3.8h11-8.3Z"/>
    </Icon>
  );
});

IconMaterialRvHookupW100.displayName = 'AmauiIconMaterialRvHookupW100';

export default IconMaterialRvHookupW100;
