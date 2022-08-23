import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleaningBucketRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucketRoundedW100Filled'
      short_name='CleaningBucket'

      {...props}
    >
      <path d="M9.475 21.7q-.575 0-1-.363-.425-.362-.5-.937l-1.35-10.25q-.05-.35.162-.6Q7 9.3 7.35 9.3h9.325q.35 0 .563.25.212.25.162.6L16.05 20.4q-.075.575-.5.937-.425.363-1 .363ZM12 15.35q.975 0 1.663-.688.687-.687.687-1.662v-1q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1q0 .675-.487 1.162-.488.488-1.163.488t-1.162-.488q-.488-.487-.488-1.162v-1q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1q0 .975.688 1.662.687.688 1.662.688Zm3-8.375q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-5-1q-.75 0-1.3-.55T8.15 4.1q0-.75.55-1.288.55-.537 1.325-.537.75 0 1.287.537.538.538.538 1.313 0 .75-.538 1.3-.537.55-1.312.55Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucketRoundedW100Filled.displayName = 'AmauiIconMaterialCleaningBucketRoundedW100Filled';

export default IconMaterialCleaningBucketRoundedW100Filled;
