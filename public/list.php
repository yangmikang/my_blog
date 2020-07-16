<?php
$conn = mysqli_connect ("site7.blog.oa.gg","site7","sbs123414","site7",3306) or die ("error");
$sql ="
SELECT *
FROM article
";
$rs = mysqli_query($conn,$sql);

$articles=[];

while ($article = mysqli_fetch_assoc ($rs)) {
    $articles[] = $article;
    # code...
}
?>

<?php
foreach($articles as $aa){ ?>
<div><?= $aa['title']?></div>
<?php } ?>

