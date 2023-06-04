import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningBucketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucketW100Filled'

      short_name='CleaningBucket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.875 21.7H8.15L6.5 9.3h11.025ZM12 15.35q.975 0 1.663-.688.687-.687.687-1.662v-1.35h-.7V13q0 .675-.487 1.162-.488.488-1.163.488t-1.162-.488q-.488-.487-.488-1.162v-1.35h-.7V13q0 .975.688 1.662.687.688 1.662.688Zm3-8.375q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-5-1q-.75 0-1.3-.55T8.15 4.1q0-.75.55-1.288.55-.537 1.325-.537.75 0 1.287.537.538.538.538 1.313 0 .75-.538 1.3-.537.55-1.312.55Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucketW100Filled.displayName = 'AmauiIconMaterialCleaningBucketW100Filled';

export default IconMaterialCleaningBucketW100Filled;
