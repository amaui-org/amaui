import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBackgroundReplaceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundReplaceW100'

      short_name='BackgroundReplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 8.875v-1L8.875 3.3h1Zm0-3.825v-1l.75-.75h1Zm10.375 1.1q-.15-.1-.312-.2-.163-.1-.313-.175L16.525 3.3h1ZM4.3 15.525l3.475-3.475.175.35q.075.15.175.275L6.25 14.55q-.4.125-.9.375t-1.05.6ZM16.375 8.25q0-.025 0 0-.05-.125-.137-.325-.088-.2-.188-.325l3.65-3.65v.975Zm-5.925-2.7L12.7 3.3h1l-2 2q-.275.025-.625.1-.35.075-.625.15ZM4.3 12.7v-1l3.25-3.25q-.1.325-.162.637-.063.313-.063.588Zm13.45 1.85q-.175-.075-.337-.138-.163-.062-.363-.162l2.65-2.65v1Zm-1.725-2.1q.125-.2.213-.388.087-.187.162-.387.1-.225.15-.45.05-.225.1-.425l3.05-3.05v1.025ZM12 12.7q-1.125 0-1.912-.788Q9.3 11.125 9.3 10t.788-1.912Q10.875 7.3 12 7.3t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm0-.7q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm-6.7 7.7v-1.3q0-.65.363-1.088.362-.437.887-.712 1.2-.575 2.587-.938Q10.525 15.3 12 15.3t2.863.362q1.387.363 2.587.938.5.25.875.712.375.463.375 1.088v1.3ZM6 19h12q0-.775-.175-1.163-.175-.387-.725-.637-.95-.45-2.225-.825Q13.6 16 12 16t-2.875.375Q7.85 16.75 6.9 17.2q-.525.25-.712.637Q6 18.225 6 19Z"/>
    </Icon>
  );
});

IconMaterialBackgroundReplaceW100.displayName = 'AmauiIconMaterialBackgroundReplaceW100';

export default IconMaterialBackgroundReplaceW100;
