const [titleLength, setTitleLength] = useState('');
  const cusChip = (val) => {
    return (
      <TouchableOpacity style={styles.chipView} onPress= {() => setTitleLength(9)}>
        <Text style={styles.chipText}>more</Text>
      </TouchableOpacity>
    )
  }
  const titleHandler = (val) => {
    setTitleLength(val)
    const title = titleLength > 10 ? titleLength.slice(0, 10) + "..." : val
    return (
      <>
        <Text style= {styles.text}>{title}</Text>
        {cusChip(val)}
      </>

    );