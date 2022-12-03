import React from 'react';

export default function Library(props: any) {

  React.useEffect(() => {
    console.log(1, props);
  }, []);

  console.log(props);

  return (
    <div>
      a
    </div>
  );
}
